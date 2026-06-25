export const brandAccentClass = "accent-sky";

export const getCategoryAccentClass = (name: string) => {
  const key = name.toLowerCase();
  if (key.includes("surviv")) return "accent-green";
  if (key.includes("explor")) return "accent-sky";
  if (key.includes("build")) return "accent-gold";
  if (key.includes("deep")) return "accent-blue";
  return brandAccentClass;
};
