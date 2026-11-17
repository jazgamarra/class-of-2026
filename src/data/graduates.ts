export type GraduateGroup = {
  id: 'btn' | 'cbt';
  shortName: string;
  fullName: string;
  count: number;
  names: string[];
};

export const graduateGroups: GraduateGroup[] = [
  {
    id: 'btn',
    shortName: 'BATAN',
    fullName: 'Bachillerato Técnico en Administración',
    count: 26,
    names: [
      'Leandro Barboza Casariego',
      'Enrique Matias Baumann Jara',
      'Micaela Yerutí Castiñeira Scanenius',
      'Johana Paola Da Silva Lopez',
      'Sofia Norelys Ferreira Maidana',
      'Jose Matias Fleitas Gonzalez',
      'Sofia Jazmin Fleitas Ovelar',
      'Cesar Marcelo Franco Cuellar',
      'Diego Javier Galván Benitez',
      'Fiorella Ma. de los Ángeles Gamarra Benitez',
      'Danna Fiorella Garcia Gonzalez',
      'Marcelo Agustin Garcia Martinez',
      'Luana Victoria Jara Gonzalez',
      'Tobías Mateo Lopez Cabañas',
      'Luis Guillermo Maldonado Paredes',
      'Sebastian Rafael Martinez Chaparro',
      'Alejandro Daniel Medina Velazquez',
      'Florencia Catalina Parini Lopez',
      'Mathias Joaquin Perez Benitez',
      'Alejandra Belen Rolon Volkart',
      'Raul Ramses Roman Barrios',
      'Roberto Sebastian Saldivar Salinas',
      'Gonzalo Nahuel Sanabria Martinez',
      'Virginia Jazmin Velazquez Gamarra',
      'Oscar Tiziano Moreno Caballero',
      'Paloma Nahir Ramirez Escurra',
    ],
  },
  {
    id: 'cbt',
    shortName: 'CBT',
    fullName: 'Ciencias Básicas y sus Tecnologías',
    count: 16,
    names: [
      'Ana Camila Gonzalez Vazquez',
      'Sofia Tiziana Benitez Ruffinelli',
      'Luis Enrique Bolaños Gonzalez',
      'Sophia Elizabeth Buzo Ferreira',
      'Lua Constanza Figueredo Amarilla',
      'Karissa Stephanie Arellys Galeano Ascurra',
      'Lucia Beatriz Leiva Servin',
      'Lucciano Mateo Molinas Coronel',
      'Alan Jonas Montiel Meza',
      'Maria Paz Orue Bazan',
      'Gustavo Sebastian Paredes Monzon',
      'Fernanda Belen Recalde Vera',
      'Ricardo Tadeo Samaniego Boveda',
      'Ramiro Joaquin Berdejo Palazon',
      'Cecilia Maria Colman Servin',
      'Matias Alejandro Rodriguez Ortiz',
    ],
  },
];
