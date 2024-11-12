from wsgiref.simple_server import make_server


class WebApp:
	def __init__(self, environment, response):
		self.environment = environment
		self.response = response
		pass

	def __iter__(self):
		status = '200 OK'
		response_headers = [('Content-type', 'text/html')]
		self.response(status, response_headers)
		yield b'<strong> Hello class based wsgi'

with make_server('', 8000, WebApp) as server:
	print('Serving on port 8000...\n visit http://127.0.0.1:8000')
	server.serve_forever()
