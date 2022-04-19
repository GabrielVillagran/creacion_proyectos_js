// prueba basica proporcionada por la documentacion de jest
describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        // Se realiza el codigo como queremos que se use
        const myMissionCommander = new MissionCommander("Woopa")
            // Validacion de resultados esperados
        expect(myMissionCommander.name).toBe("Woopa");
    });
})