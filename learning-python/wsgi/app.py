from wsgiref.simple_server import make_server

def web_app(environment, response):
  # status must be at least 4 characters long
  status = '200 OK'
  headers = [('Content-type', 'text/html; charset=utf-8')]
  response(status, headers)
  return [b'<strong> Hello World']

# default host is local
with make_server('', 8000, web_app) as server:
  print('Serving on port 8000...\nVisit http://127.0.0.1:8000')

  server.serve_forever()