export default async function readGithubFile(url: string) {
  try {
    if (!url) return '';
    const res = await fetch(
      `https://raw.githubusercontent.com/${url.replace('/blob', '')}`
    );
    const rawText = res.text();
    return rawText;
  } catch {
    return '';
  }
}
