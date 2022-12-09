import { graphql, PageProps } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

interface seo {
  site: {
    siteMetadata: {
      siteUrl: string;
      title: string;
      twitterHandle: string;
      description: string;
      linkedinHandle: string;
      youtubeChannel: string;
    };
  };
}

const SEO = ({ data }: PageProps<seo>) => {
  const {
    siteUrl,
    title,
    twitterHandle,
    linkedinHandle,
    description,
    youtubeChannel,
  } = data.site.siteMetadata;

  return (
    <Helmet title={title}>
      <title>{title}</title>
      <link rel="canonical" href="https://explorers-world.vercel.app"/>
      <meta name="linkedin" content={linkedinHandle} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta property="url" content={siteUrl} />
      <meta property="title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="youtube:channel" content={youtubeChannel} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="og:linkedin" content={linkedinHandle} />
    </Helmet>
  );
};

export default SEO;

export const query = graphql`
  query SearchEngineOptimization {
    site {
      siteMetadata {
        siteUrl
        title
        description
        twitterHandle
        linkedinHandle
        youtubeChannel
      }
    }
  }
`;
