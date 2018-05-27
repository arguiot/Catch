# Catch
A small library to keep track of errors after deployment.

## Why?

Example of a situation:
> After you released your fancy new website, some people will start to send you emails about a bug that you never experienced. Unfortunately, these persons aren't developers and have no idea of what the inspector is, so you can't ask them to take a screenshot of the error. And because of that, this error will always happen to some people, which is a big issue.

Catch was created to fix that. You can detect errors, and send a fetch request with the content of the error and additional information.
