const getInitialData = () => [
  {
    id: +new Date(),
    title: 'Babel',
    body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    createdAt: new Date().toISOString(),
    archived: false,
  },
  {
    id: +new Date() + 1, // ensure unique id
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya component.',
    createdAt: new Date().toISOString(),
    archived: false,
  },
  {
    id: +new Date() + 2,
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup sebuah component. Method lifecycle yang paling sering digunakan adalah componentDidMount dan componentWillUnmount.',
    createdAt: new Date().toISOString(),
    archived: true,
  },
  // Add more sample notes if desired
];

export { getInitialData };
