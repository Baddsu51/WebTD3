export type Student = {
    id: number;
    name: string;
    firstname : string;
    age: number;
};

// let = variable
export let students: Array<Student> = [
    {
        id: 1,
        name: 'DOE',
        firstname: 'John',
        age: 18,
    },
    {
        id: 2,
        name: 'DUPONT',
        firstname: 'Martin',
        age: 20,
    },
];