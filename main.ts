player.onChat("obstaculos", function () {
    posicaoInicial = player.position()
    posicao = positions.add(
    player.position(),
    pos(1, 0, 0)
    )
    construirObstaculos()
})
function construirObstaculos () {
    for (let valor of blocos) {
        blocks.place(valor, posicao)
        blocks.place(BEACON, positions.add(
        posicao,
        pos(0, 0, -2)
        ))
        blocks.place(BEACON, positions.add(
        posicao,
        pos(0, 0, 2)
        ))
        blocoPos.push(posicao)
        posicao = positions.add(
        posicao,
        pos(5, 0, 0)
        )
    }
    blocks.place(ENCHANTMENT_TABLE, positions.add(
    posicao,
    pos(1, 0, 0)
    ))
    loops.pause(100)
    contagem = 0
    tempo = 30
}
loops.forever(function () {
    for (let index = 0; index < 31; index++) {
        loops.pause(1000)
        if (tempo > 0) {
            tempo += -1
            player.say("Tempo restante: " + ("" + tempo) + " segundos")
            if (tempo == 0) {
                player.teleport(posicaoInicial)
                tempo = -1
            }
        }
    }
})
let tempo = 0
let contagem = 0
let posicao: Position = null
let posicaoInicial: Position = null
let blocoPos: Position[] = []
let blocos: number[] = []
gameplay.setGameMode(
CREATIVE,
mobs.target(ALL_PLAYERS)
)
mobs.teleportToPlayer(
mobs.target(ALL_PLAYERS),
mobs.target(LOCAL_PLAYER)
)
blocos = [
PLANKS_OAK,
PLANKS_DARK_OAK,
POLISHED_ANDESITE,
NOTE_BLOCK,
GRANITE,
LAPIS_LAZULI_BLOCK,
PLANKS_SPRUCE
]
blocoPos = []
player.execute(
"/scoreboard objectives add count dummy placar"
)
player.execute(
"/scoreboard players set @a count 0"
)
player.execute(
"/scoreboard objectives setdisplay sidebar count "
)
