const relativeFormater = new Intl.RelativeTimeFormat("pt-BR", {
  style: "long",
});

const calculateTimeDifferenceInSeconds = (dateA: Date, dateB: Date) => {
  return Math.round((dateA.getTime() - dateB.getTime()) / 1000);
};
function getRelativeTimeFormat(
  difference: number,
  type: Intl.RelativeTimeFormatUnit
): string {
  return relativeFormater.format(difference, type);
}

 function DataFormater(difference: number) {
    console.log("here")
  if (difference < 60) {
    return getRelativeTimeFormat(Math.round(difference), "seconds");
  } else if (difference < 60 * 60) {
    return getRelativeTimeFormat(Math.round(difference / 60), "minutes");
  } else if (difference < 60 * 60 * 24) {
    return getRelativeTimeFormat(Math.round(difference / 60 / 60), "hours");
  } else if (difference < 60 * 60 * 24 * 30) {
    return getRelativeTimeFormat(Math.round(difference / 60 / 60 / 24), "days");
  } else if (difference < 60 * 60 * 24 * 30 * 12) {
    return getRelativeTimeFormat(
      Math.round(difference / 60 / 60 / 24 / 30),
      "months"
    );
  } else {
    return getRelativeTimeFormat(
      Math.round(difference / 60 / 60 / 24 / 30 / 12),
      "years"
    );
  }
}

export default function FormateDateDifference(dataString: string) {
  const currentDate = new Date();
  const providerDate = new Date(dataString);
  const timeDiference = calculateTimeDifferenceInSeconds(
    currentDate,
    providerDate
  );
  return DataFormater(timeDiference);
}
