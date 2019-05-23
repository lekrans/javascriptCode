### util.debuglog(section)

section <string> A string identifying the portion of the application for which the debuglog function is being created.
Returns: <Function> The logging function

##The util.debuglog() method is used to create a function that conditionally writes debug messages to stderr based on the existence of the NODE_DEBUG environment variable. If the section name appears within the value of that environment variable, then the returned function operates similar to console.error(). If not, then the returned function is a no-op.
