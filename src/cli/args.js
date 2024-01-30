const parseArgs = () => {
  // Skip the first two elements (node and script path)
  const args = process.argv.slice(2);

  const parsedArgs = [];

  // why i += 2 -> [ '--some-arg', 'value1', '--other', '1337', '--arg2', '42' ]
  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace("--", "");
    const value = args[i + 1];
    parsedArgs.push(`${propName} is ${value}`);
  }

  console.log(parsedArgs.join(", "));
};

parseArgs();
