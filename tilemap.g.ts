// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1000100001010103010101050101030101010104010206000606060606060600000000010300060006000000000006060606000101000600060006060600000000060005010006000600000606000606000600010500000006060606060006060000000101000606060000000000060606060001010006000000060606060606060600030300060606000600000000000006000101000000000006000606000600060005010606060606060006060006000000010107060600000600060600060606060304000606060006000606000000000001010006060600060006060606060606040100000000000000000000000000000101010104010101010101050101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 2 2 2 2 2 2 . . . . 2 
2 . 2 . 2 . . . . . 2 2 2 2 . 2 
2 . 2 . 2 . 2 2 2 . . . . 2 . 2 
2 . 2 . 2 . . 2 2 . 2 2 . 2 . 2 
2 . . . 2 2 2 2 2 . 2 2 . . . 2 
2 . 2 2 2 . . . . . 2 2 2 2 . 2 
2 . 2 . . . 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 . 2 . . . . . . 2 . 2 
2 . . . . . 2 . 2 2 . 2 . 2 . 2 
2 2 2 2 2 2 2 . 2 2 . 2 . . . 2 
2 . 2 2 . . 2 . 2 2 . 2 2 2 2 2 
2 . 2 2 2 . 2 . 2 2 . . . . . 2 
2 . 2 2 2 . 2 . 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight3,sprites.dungeon.floorLight5,sprites.dungeon.floorMixed,sprites.dungeon.floorDark2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
