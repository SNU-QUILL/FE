import { Helmet } from "react-helmet-async";

interface ISEOProps {
  title?: string;
  description?: string;
  pictureUrl?: string;
}

const SEO = ({ title, description, pictureUrl }: ISEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:site_name' content={title} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={pictureUrl} />
      <meta property='og:url' content={window.location.href} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
    </Helmet>
  );
};
export default SEO;
