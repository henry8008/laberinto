
tiles.set_current_tilemap(tilemap("""nivel1"""))
scene.set_background_image(assets.image("""fondo🫱🏻🫲🏻🦑"""))
perrito = sprites.create(assets.image("""perrofacha"""), SpriteKind.player)
controller.move_sprite(perrito)
perrito.set_scale(1, ScaleAnchor.MIDDLE)
tiles.place_on_tile(perrito, tiles.get_tile_location(1, 1))
scene.camera_follow_sprite(perrito)

def on_overlap_tile(sprite, location):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,assets.image("""win"""), on_overlap_tile)










