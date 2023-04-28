class scene_1 extends Phaser.Scene {
    
    constructor(){
        super("scene_1");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image("logo", "logo.png"); // make this have transparent background
        console.log("Finished preloading!");
    }

    create(){
        this.graphics = this.add.graphics();
        
        this.imageObject = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "logo"
        );
        
        this.imageObject.setScale(0.2);

        // progress to next scene 
        let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        space.on('down', () => {
            this.scene.start("scene_2");
        })

    }

    update(){}
}

class scene_2 extends Phaser.Scene {
    
    constructor(){
        super("scene_2");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image("2_background", "scene2_bg.png");
        this.load.image("2_foreground", "scene2_fg.png");
        console.log("Finished preloading!");
    }

    create(){
        this.imageObject = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "2_background",
        )
        
        this.imageObject.setScale(0.5);

        this.imageObject = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "2_foreground",
        )
        
        this.imageObject.setScale(0.5);
    
        // progress to next scene
        let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        space.on('down', () => {
            this.scene.start("scene_3");
        })

        // progress to previous scene
        let left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        left.on('down', () => {
            this.scene.start("scene_1");
        })
    }

    update(){}
}

class scene_3 extends Phaser.Scene {
    
    constructor(){
        super("scene_3");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image("3_background", "scene3_bg.png");
        console.log("Finished preloading!");
    }

    create(){
        this.imageObject = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "3_background",
        )
        
        this.imageObject.setScale(0.5);
    
        // progress to next scene
        let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        space.on('down', () => {
            this.scene.start("scene_4");
        });

        // progress to previous scene
        let left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        left.on('down', () => {
            this.scene.start("scene_2");
        });
    }

    update(){}
}

class scene_4 extends Phaser.Scene {
    
    constructor(){
        super("scene_4");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image("4_background", "scene4_bg.png");
        this.load.image("4_foreground", "scene4_fg.png");
        console.log("Finished preloading!");
    }

    create(){
        this.imageObject = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "4_background",
        )
        
        this.imageObject.setScale(0.5);

        this.imageObject = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "4_foreground",
        )
        
        this.imageObject.setScale(0.5);
    
        // progress to next scene
        // let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        // space.on('down', () => {
        //     this.scene.start("scene_5");
        // })

        // progress to previous scene
        let left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        left.on('down', () => {
            this.scene.start("scene_3");
        })
    }

    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 1350,
    height: 825,
    backgroundColor: 0x204140,
    scene: [scene_1, scene_2, scene_3, scene_4],
}

let game = new Phaser.Game(config);