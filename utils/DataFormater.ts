const relativeFormater = new Intl.RelativeTimeFormat("pt-BR", {
  style: "long",
});

export default function DataFormater(dataString: string) {
  const dateNow = new Date();
  const data = new Date(dataString);
  let type = "";
  //o getTIme retorna o valor em milisegundos então dividiremos por 1000 para termos os segundos
  let difference = (dateNow.getTime() - data.getTime()) / 1000;

  if (difference < 60) {
    type = "seconds";
    difference = Math.round(difference);
  } else if (difference < 60 * 60) {
    (type = "minutes"), (difference = Math.round(difference / 60));
  } else if (difference < 60 * 60 * 24) {
    type = "hours";
    difference = Math.round(difference / 60 / 60);
  } else if (difference < 60 * 60 * 24 * 30) {
    (type = "days"), (difference = Math.round(difference / 60 / 60 / 24));
  } else if (difference < 60 * 60 * 24 * 30 * 12) {
    type = "months";
    difference = Math.round(difference / 60 / 60 / 24 / 30);
  } else {
    type = "years";
    difference = Math.round(difference / 60 / 60 / 24 / 30 / 12);
  }
  console.log(Math.round(difference));

  console.log(relativeFormater.format(difference, type));
  return relativeFormater.format(difference, type);
}
