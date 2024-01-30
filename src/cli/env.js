const parseEnv = () => {
  const envVars = process.env;
  console.log("Object.keys(envVars)", Object.keys(envVars));
  const rssVars = Object.keys(envVars)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => `${key}=${envVars[key]}`)
    .join("; ");

  console.log(rssVars);
};

parseEnv();
