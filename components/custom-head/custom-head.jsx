import React from "react";
import Head from "next/head";

const CustomHead = (props) => {
  const { title = "Fuel" } = props;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
