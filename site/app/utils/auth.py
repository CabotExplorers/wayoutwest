from urllib.parse import urlparse, urljoin
from functools import wraps

from flask import current_app, redirect, url_for, abort
from flask_login import current_user

from app.models import Permission
from app.utils import getFileExtension


def isSafeUrl(target, request):
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url, target))
    return test_url.scheme in ("http", "https") and ref_url.netloc == test_url.netloc


def allowedFile(filename):
    return (
        "." in filename
        and getFileExtension(filename) in current_app.config["UPLOAD_EXTENSIONS"]
    )


def needs_group(f):
    @wraps(f)
    def inner(*args, **kwargs):
        if current_user.hasPermission(Permission.GROUP):
            return f(*args, **kwargs)

        elif current_user.get_id() == None:
            # Not logged in - redirect to form
            return redirect(url_for("group.login"))

        else:
            # Logged in but not a Group User
            return abort(403)

    return inner


def needs(permission):
    def outer(f):
        @wraps(f)
        def inner(*args, **kwargs):
            if current_user.hasPermission(permission):
                return f(*args, **kwargs)

            elif current_user.get_id() == None:
                return redirect(url_for("auth.login"))

            else:
                return abort(403)

        return inner

    return outer


def needs_login(f):
    return needs(Permission.LOGIN)(f)


def needs_curate(f):
    return needs(Permission.CURATE)(f)


def needs_manage(f):
    return needs(Permission.MANAGE)(f)


def needs_admin(f):
    return needs(Permission.ADMIN)(f)
