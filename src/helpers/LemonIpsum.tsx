import { useEffect, useState } from "react";

export const LemonIpsum = () => {
  const [lorem, setLorem] = useState<String>("");

  

  useEffect(() => {
    const loremVariations = [
        "Nosso propósito é dar poder às pessoas e acelerar a transição para a energia sustentável\n",
        "Chega de pagar caro na conta de luz e não saber o porquê, ou de receber sua conta em papel todo mês e não entender nada do que está escrito.\n",
        "Somos incansáveis na busca das melhores soluções, por isso chega de consumir uma energia que faz mal para o nosso planeta.\n",
        "Acreditamos que o futuro é feito de decisões que tomamos agora e decidimos transformar a experiência com energia no Brasil.\n",
        "Com a Lemon, você sempre – e é sempre mesmo – vai ter uma energia mais barata, mais sustentável e mais digital pro seu negócio.\n",
        "Energia é essencial. E não precisa ser cara. Responsável por fazer funcionar tantos negócios no Brasil, eletricidade também pode ser limpa! Gerar economia é ajudar a realizar sonhos.\n",
        "A produção de energia no mundo é uma das fontes mais poluentes ao meio ambiente. Energia pode ser sustentável e precisa ser acessível! É pra isso que trabalhamos.\n",
        "Tecnologia é ferramenta. Nossa grande aliada para transformar o mercado de energia e trazer mais simplicidade e poder para as pessoas e seus negócios.\n",
        "faz bem para o seu negócio, faz bem para o planeta\n",
        "Energia sustentável não prejudica o meio ambiente como grandes hidrelétricas, nem polui como as termelétricas. Construir um presente mais sustentável é possível.\n",
      ];


    let timesRun = 0;
    let interval = setInterval(function () {
      timesRun += 1;
      if (timesRun === 8) {
        clearInterval(interval);
      }
      setLorem((lorem) => lorem + loremVariations[Math.floor(Math.random() * loremVariations.length)]);
    }, 1000);
  }, []);

  return [lorem];
};
