import * as StudentsService from "../services/students.service";

export const getStudents = async (req: any, res: any) => {
    const students = await StudentsService.getStudents(); // attention de bien séparer la déclaration de students pour bien mettre le await
    return res.status(200).json(students);
};

export const getStudent = async (req: any, res: any) => {
    const { id } = req.params;
    const student = await StudentsService.getStudent(id);
    return res.status(200).json(student);
};

export const createStudent = async (req: any, res: any) => {
    // req.params : contient les paramètres de la route dans l'url
    // req.body : contient les données envoyées par le client au serveur dans le corps de la requête (ex: methode POST, PUT)
    const { name, firstname, age } = req.body;
    const students = await StudentsService.createStudent(name, firstname, age)
    return res.status(200).json(students);
};

export const updateStudent = async (req: any, res: any) => {
    const { id } = req.params;
    const body = req.body;
    const students = await StudentsService.updateStudent(id, body);
    return res.status(200).json(students);
}   

export const deleteStudent = async (req: any, res: any) => {
    const { id } = req.params;
    const students = await StudentsService.deleteStudent(id);
    return res.status(200).json(students);
}