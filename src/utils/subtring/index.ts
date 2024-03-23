const splitDescription = (description: string) => {
  const lines = description.split("\n");
  const sections = [];
  for (let i = 0; i < lines.length; i += 6) {
    sections.push(lines.slice(i, i + 6).join("\n"));
  }
  return sections;
};

export default splitDescription;
