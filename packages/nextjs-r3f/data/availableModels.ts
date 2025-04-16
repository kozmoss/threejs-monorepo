export type Model = {
  name: string;
  path: string;
  background: string;
};

export const availableModels: Model[] = [
    {
      name: "Matkap",
      path: "/models/drill.glb",
      background: "workshop_1k.hdr",
    },
    {
      name: "Çekiç",
      path: "/models/hammer.glb",
      background: "workshop_1k.hdr",
    },
    {
      name: "Metre",
      path: "/models/tapeMeasure.glb",
      background: "workshop_1k.hdr",
    },
    {
        name: "Araba",
        path: "/models/car.glb",
        background: "",
      },
  ];