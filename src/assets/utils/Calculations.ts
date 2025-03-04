// for wood
export class Calculations {
    private count: number
    private rest: number

    constructor(count: string) {
        this.count = parseInt(count)
        this.rest = 0
        console.log(this.rest)
    }

    public wood() {
        let woodNum = Math.ceil(this.count / 3)
        let logsNum = woodNum * 4
        return logsNum
    }

    public logs() {
        return this.count
    }

    public planks() {
        let logsNumber = Math.ceil(this.count / 4)
        return logsNumber
    }

    public slabs() {
        let slabsNum = Math.ceil(this.count / 6)
        slabsNum *= 3
        slabsNum = Math.ceil(slabsNum / 4)
        return slabsNum
    }

    public stairs() {
        // zaokraglenie do paczek po 4 schody, czyli 1 = 1, 2 = 1, 3 = 1, 4 = 1, a 5 = 2
        let stairsNum = Math.ceil(this.count / 4)

        // potrzebne deski na ilosc paczek, czyli 1 = 6, 2 = 6, 3 = 6, 4 = 6, a 5 = 12
        let planksNum = stairsNum * 6

        // potrzebne logi na ilosc desek, czyli na 6 desek 2 logi oraz
        // 1 schodek = 2 logi, 5 schodkow = 3 logi bo na 5 schodkow 12 desek czyli 3 logi
        let logsNum = Math.ceil(planksNum / 4)

        return logsNum
    }

    public fences() {
        let fencesNum = Math.ceil(this.count / 3)
        // 5 bo 4 deski normalnie i 2 patyki
        let planksNum = fencesNum * 5
        let logsNum = Math.ceil(planksNum / 4)
        return logsNum
    }

    public fenceGates() {
        let fenceGates = Math.ceil(this.count / 1)
        // 4 bo 2 deski normalnie i 4 patyki
        let planksNum = fenceGates * 4
        let logsNum = Math.ceil(planksNum / 4)
        return logsNum
    }

    public doors() {
        let doorsNum = Math.ceil(this.count / 3)
        let planksNum = doorsNum * 6
        let logsNum = Math.ceil(planksNum / 4)
        return logsNum
    }

    public trapdoors() {
        let trapdoorsNum = Math.ceil(this.count / 2)
        let planksNum = trapdoorsNum * 6
        let logsNum = Math.ceil(planksNum / 4)
        return logsNum
    }

    public signs() {
        let signsNum = Math.ceil(this.count / 3)
        // 6.5 bo 6 desek normalnie i 1 patyk
        let planksNum = signsNum * 6.5
        let logsNum = Math.ceil(planksNum / 4)
        return logsNum
    }
}
