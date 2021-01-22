(function() {var implementors = {};
implementors["salvo_core"] = [{"text":"impl Unpin for CatcherImpl","synthetic":true,"types":[]},{"text":"impl Unpin for Depot","synthetic":true,"types":[]},{"text":"impl Unpin for HttpError","synthetic":true,"types":[]},{"text":"impl Unpin for ReadError","synthetic":true,"types":[]},{"text":"impl Unpin for FormData","synthetic":true,"types":[]},{"text":"impl Unpin for FilePart","synthetic":true,"types":[]},{"text":"impl Unpin for FieldHeaders","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; Unpin for NextField&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; Unpin for Field&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; Unpin for FieldData&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for ReadToString&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for Multipart&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as TryStream&gt;::Ok: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for HttpRange","synthetic":true,"types":[]},{"text":"impl Unpin for Request","synthetic":true,"types":[]},{"text":"impl Unpin for ResponseBody","synthetic":true,"types":[]},{"text":"impl Unpin for Response","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for FnFilter&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Router","synthetic":true,"types":[]},{"text":"impl Unpin for DetectMatched","synthetic":true,"types":[]},{"text":"impl Unpin for PathState","synthetic":true,"types":[]},{"text":"impl Unpin for Server","synthetic":true,"types":[]},{"text":"impl Unpin for TlsServer","synthetic":true,"types":[]},{"text":"impl Unpin for HyperHandler","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for HtmlTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for JsonTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PlainTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for XmlTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for NamedFile","synthetic":true,"types":[]},{"text":"impl Unpin for NamedFileBuilder","synthetic":true,"types":[]},{"text":"impl Unpin for FileChunk","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
implementors["salvo_extra"] = [{"text":"impl Unpin for BasicAuthHandler","synthetic":true,"types":[]},{"text":"impl Unpin for BasicAuthConfig","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Unpin for JwtHandler&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Unpin for JwtConfig&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for HeaderExtractor","synthetic":true,"types":[]},{"text":"impl Unpin for FormExtractor","synthetic":true,"types":[]},{"text":"impl Unpin for QueryExtractor","synthetic":true,"types":[]},{"text":"impl Unpin for CookieExtractor","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for StaticDir","synthetic":true,"types":[]},{"text":"impl Unpin for StaticFile","synthetic":true,"types":[]},{"text":"impl Unpin for Builder","synthetic":true,"types":[]},{"text":"impl Unpin for CorsHandler","synthetic":true,"types":[]},{"text":"impl Unpin for WsHandler","synthetic":true,"types":[]},{"text":"impl Unpin for WebSocket","synthetic":true,"types":[]},{"text":"impl Unpin for Message","synthetic":true,"types":[]},{"text":"impl Unpin for MissingConnectionUpgrade","synthetic":true,"types":[]},{"text":"impl Unpin for SseEvent","synthetic":true,"types":[]},{"text":"impl Unpin for CompressionAlgo","synthetic":true,"types":[]},{"text":"impl Unpin for CompressionHandler","synthetic":true,"types":[]},{"text":"impl&lt;'pin, S&gt; Unpin for SseKeepAlive&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__SseKeepAlive&lt;'pin, S&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()