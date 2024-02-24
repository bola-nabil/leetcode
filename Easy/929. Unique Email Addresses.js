var numUniqueEmails = (emails) =>
  new Set(
    emails.map((a) => {
      const [local, domain] = a.split("@");
      return `${local.replace(/\+.*/, "").replace(/\./g, "")}@${domain}`;
    })
  ).size;
