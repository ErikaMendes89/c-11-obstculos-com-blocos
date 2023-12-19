def on_on_chat():
    global posicaoInicial, posicao
    posicaoInicial = player.position()
    posicao = positions.add(player.position(), pos(1, 0, 0))
    construirObstaculos()
player.on_chat("obstaculos", on_on_chat)

def construirObstaculos():
    global posicao, contagem, tempo
    for valor in blocos:
        blocks.place(valor, posicao)
        blocks.place(BEACON, positions.add(posicao, pos(0, 0, -2)))
        blocks.place(BEACON, positions.add(posicao, pos(0, 0, 2)))
        blocoPos.append(posicao)
        posicao = positions.add(posicao, pos(5, 0, 0))
    blocks.place(ENCHANTMENT_TABLE, positions.add(posicao, pos(1, 0, 0)))
    loops.pause(100)
    contagem = 0
    tempo = 30

def on_forever():
    global tempo
    for index in range(31):
        loops.pause(1000)
        if tempo > 0:
            tempo += -1
            player.say("Tempo restante: " + str(tempo) + " segundos")
            if tempo == 0:
                player.teleport(posicaoInicial)
                tempo = -1
loops.forever(on_forever)

tempo = 0
contagem = 0
posicao: Position = None
posicaoInicial: Position = None
blocoPos: List[Position] = []
blocos: List[number] = []
gameplay.set_game_mode(CREATIVE, mobs.target(ALL_PLAYERS))
mobs.teleport_to_player(mobs.target(ALL_PLAYERS), mobs.target(LOCAL_PLAYER))
blocos = [PLANKS_OAK,
    PLANKS_DARK_OAK,
    POLISHED_ANDESITE,
    NOTE_BLOCK,
    GRANITE,
    LAPIS_LAZULI_BLOCK,
    PLANKS_SPRUCE]
blocoPos = []
player.execute("/scoreboard objectives add count dummy placar")
player.execute("/scoreboard players set @a count 0")
player.execute("/scoreboard objectives setdisplay sidebar count ")