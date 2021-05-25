export default function switchTheme(switchClick) {

  const $switch = document.getElementById(switchClick);

  const $styles = document.documentElement.style;

  let a = 0;

  const darkTheme = {
    '--bg-color': 'hsl(230, 17%, 14%)',
    '--bg-color-head': 'hsl(232, 19%, 15%)',
    '--bg-card': 'hsl(228, 28%, 20%)',
    '--bg-card-hover': 'hsl(228, 26%, 27%)',
    '--title-color': 'hsl(0, 0%, 100%)',
    '--text-color': 'hsl(228, 34%, 66%)',
    '--bg-toggle': 'linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%'
  }

  const lightTheme = {
    '--bg-color': 'hsl(0, 0%, 100%)',
    '--bg-color-head': 'hsl(225, 100%, 98%)',
    '--bg-card': 'hsl(227, 47%, 96%)',
    '--bg-card-hover': 'hsl(232, 33%, 91%)',
    '--text-color': 'hsl(228, 12%, 44%)',
    '--title-color': 'hsl(230, 17%, 14%)',
    '--bg-toggle': 'linear-gradient(90deg, hsl(230, 22%, 74%) 0%, hsl(230, 22%, 74%) 100%'
  }

  const changeTheme = (theme) => {
    for (const style in theme) {
      $styles.setProperty(style, theme[style]);
    }
  }

  document.addEventListener('click', e => {

    if (e.target === $switch) {
      a ? (
        changeTheme(lightTheme),
        a = 0
      )
        : (
          changeTheme(darkTheme),
          a = 1
        );
    }

  });

}



