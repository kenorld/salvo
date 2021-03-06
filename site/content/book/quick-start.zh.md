+++
title = "世界, 你好!"
weight = 1
template = "page.html"
+++


新建一个 Rust 项目:
```bash
cargo new salvo_taste --bin
```

Add this to `Cargo.toml`
```toml
[dependencies]
salvo = "0.5"
tokio = { version = "1.0", features = ["full"] }
```

Create a simple function handler in the main.rs file, we call it `hello_world`, this function just render plain text "Hello World".

```rust
use salvo::prelude::*;

#[fn_handler]
async fn hello_world(res: &mut Response) {
    res.render_plain_text("Hello World");
}
```

In the main function, we need to create a root Router first, and then create a server and call it's serve function:

```rust
use salvo::prelude::*;

#[fn_handler]
async fn hello_world(res: &mut Response) {
    res.render_plain_text("Hello World");
}

#[tokio::main]
async fn main() {
    let router = Router::new().get(hello_world);
    let server = Server::new(router);
    server.bind(([0, 0, 0, 0], 7878)).await;
}
```