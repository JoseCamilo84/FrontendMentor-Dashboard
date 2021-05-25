export default function numerosRandom(totalFollowers, cards) {

  const $totalFollowers = document.getElementById(totalFollowers);

  const $cardNumbers = document.querySelectorAll(cards);

  // Muestra un número en formato abreviado
  const formatNumbers = (number) => {
    if (number > 999999) return `${Math.floor(number / 1000000)}M`;
    if (number > 9999) return `${Math.floor(number / 1000)}K`;
    return number;
  }

  // Muestra un número en formato con punto (millares) y coma (decimales)
  const notationNumbers = (number) => new Intl.NumberFormat("de-DE").format(number);

  // Obtener un número aleatorio
  const numeroAleatorio = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) - min;

  // Esta función nos permite elejir cómo queremos mostrar el total de followers
  const showNumber = (format) => {
    let totalFollowersNumbers = 0;

    $cardNumbers.forEach(ele => {
      const random = ele.textContent = numeroAleatorio(0, 10000)
      totalFollowersNumbers += random
    });

    $totalFollowers.textContent = `Total de Followers: ${format
      ? formatNumbers(totalFollowersNumbers)
      : notationNumbers(totalFollowersNumbers)
      }`;
  }


  showNumber(false);
}




