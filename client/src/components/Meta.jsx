import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Dibbs Gaming",
  description: "We sell the best boardgames",
  keywords: "boardgames, buy boardgames, cheap boardgames",
};

export default Meta;
