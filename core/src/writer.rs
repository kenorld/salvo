use async_trait::async_trait;

use crate::http::{Request, Response};
use crate::Depot;

#[async_trait]
pub trait Writer: Send {
    #[must_use = "future must be used"]
    async fn write(mut self, req: &mut Request, depot: &mut Depot, res: &mut Response);
}

pub struct HtmlTextContent<T>(T);
#[async_trait]
impl<T> Writer for HtmlTextContent<T>
where
    T: AsRef<str> + Send,
{
    async fn write(mut self, _req: &mut Request, _depot: &mut Depot, res: &mut Response) {
        res.render_binary("text/html".parse().unwrap(), self.0.as_ref().as_bytes());
    }
}

pub struct JsonTextContent<T>(T);
#[async_trait]
impl<T> Writer for JsonTextContent<T>
where
    T: AsRef<str> + Send,
{
    async fn write(mut self, _req: &mut Request, _depot: &mut Depot, res: &mut Response) {
        res.render_binary("application/json".parse().unwrap(), self.0.as_ref().as_bytes());
    }
}

pub struct PlainTextContent<T>(T);
#[async_trait]
impl<T> Writer for PlainTextContent<T>
where
    T: AsRef<str> + Send,
{
    async fn write(mut self, _req: &mut Request, _depot: &mut Depot, res: &mut Response) {
        res.render_binary("text/plain".parse().unwrap(), self.0.as_ref().as_bytes());
    }
}

pub struct XmlTextContent<T>(T);
#[async_trait]
impl<T> Writer for XmlTextContent<T>
where
    T: AsRef<str> + Send,
{
    async fn write(mut self, _req: &mut Request, _depot: &mut Depot, res: &mut Response) {
        res.render_binary("text/xml".parse().unwrap(), self.0.as_ref().as_bytes());
    }
}

#[allow(clippy::unit_arg)]
#[async_trait]
impl Writer for () {
    async fn write(mut self, _req: &mut Request, _depot: &mut Depot, _resp: &mut Response) {}
}
