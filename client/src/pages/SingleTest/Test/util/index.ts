import { IQuestion } from "../../types";

export function gen(n: number): IQuestion[] {
  return new Array(n).fill(0).map((x) => ({
    title: "Pregunta",
    answers: new Array(Math.floor(Math.random() * 3) + 1)
      .fill(0)
      .map((el, index) => ({
        title: `Respuesta ${index}`,
        points: getRandomInt(),
      })),
  }));
}

function getRandomInt(min: number = 10, max: number = 1500) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
