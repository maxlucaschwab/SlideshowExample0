class scene_1 extends Phaser.Scene {
    
    constructor(){
        super("scene_1");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image("logo", "logo.png");
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
        this.imageObject.setAlpha(0);

        this.tweens.add({
            targets: this.imageObject,
            alpha: 1,
            duration: 2000,
        });

        // progress to next scene 
        let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        space.on('down', () => {
            this.scene.start("scene_2");
        });

        // fade to black
        this.time.delayedCall(4000, () => {
            this.cameras.main.fadeOut(2000, 0, 0, 0)
        });
    
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.time.delayedCall(500, () => {
                this.scene.start('scene_2')
            });
        });

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

        this.cameras.main.fadeIn(1000, 0, 0, 0)

        this.imageObject = this.add.image(
            this.cameras.main.centerX + 20,
            this.cameras.main.centerY,
            "2_background",
        );

        this.tweens.add({
            targets: this.imageObject,
            x: this.cameras.main.centerX,
            duration: 9000,
        })
        
        this.imageObject.setScale(0.5);

        this.imageObject = this.add.image(
            this.cameras.main.centerX - 50,
            this.cameras.main.centerY,
            "2_foreground",
        );
        
        this.imageObject.setScale(0.5);

        this.tweens.add({
            targets: this.imageObject,
            x: this.cameras.main.centerX,
            duration: 9000,
        })


        // Start text rendering
        this.textObject = this.add.text(
            650,
            200,
            "In a world of hardships…",
            {
                font: "30px bold",
                color: "#00000"
            }
        );
        
        console.log(this.textObject);
        this.textObject.setAlpha(0);

        this.time.delayedCall(2000, () => {
            this.tweens.add({
                targets: this.textObject,
                alpha: 1,
                duration: 1000,
            });

            this.textObject = this.add.text(
                800,
                350,
                "…of foes and monsters…",
                {
                    font: "30px bold",
                    color: "#00000"
                }
            );
    
            this.textObject.setAlpha(0);

            this.time.delayedCall(3000, () => {
                this.tweens.add({
                    targets: this.textObject,
                    alpha: 1,
                    duration: 1000,
                });
            });
        });
        // End text rendering
    
        // progress to next scene
        let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        space.on('down', () => {
            this.scene.start("scene_3");
        });

        // progress to previous scene
        let left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        left.on('down', () => {
            this.scene.start("scene_1");
        });

        // fade to black
        this.time.delayedCall(7000, () => {
            this.cameras.main.fadeOut(2000, 0, 0, 0);
        });
    
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.time.delayedCall(500, () => {
                this.scene.start('scene_3')
            });
        });

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

        this.cameras.main.fadeIn(1000, 0, 0, 0)

        this.imageObject = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "3_background",
        );
        
        this.imageObject.setScale(0.5);

        // Start text rendering
        this.textObject = this.add.text(
            150,
            200,
            "A challenger\n" + "approaches…",
            {
                font: "40px bold",
                color: "#ffffff",
                align: "center"
            }
        );
        
        console.log(this.textObject);
        this.textObject.setAlpha(0);

        this.time.delayedCall(2000, () => {
            this.tweens.add({
                targets: this.textObject,
                alpha: 1,
                duration: 1000,
            });

            this.textObject = this.add.text(
                800,
                350,
                "One who seeks to become\n" + "WHOLE…",
                {
                    font: "40px bold",
                    color: "#ffffff",
                    align: "center"
                }
            );
    
            this.textObject.setAlpha(0);

            this.time.delayedCall(3000, () => {
                this.tweens.add({
                    targets: this.textObject,
                    alpha: 1,
                    duration: 1000,
                })
            });
        });
        // End text rendering
    
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

        // fade to black
        this.time.delayedCall(7000, () => {
            this.cameras.main.fadeOut(2000, 0, 0, 0)
        });
    
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.time.delayedCall(500, () => {
                this.scene.start('scene_4')
            })
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
        this.load.image("title", "VoidKnightLogo.png");
        console.log("Finished preloading!");
    }

    create(){

        this.cameras.main.fadeIn(1000, 0, 0, 0)

        this.imageObject = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "4_background",
        );
        
        this.imageObject.setScale(0.5);

        this.imageObject = this.add.image(
            1350,
            this.cameras.main.centerY,
            "4_foreground",
        );

        this.tweens.add({
            targets: this.imageObject,
            x: this.cameras.main.centerX,
            duration: 1500,
            ease: "bezier"
        });

        this.imageObject.setScale(0.5);

        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xffeb86, 1);
        this.graphics.fillCircle(297, 205, 28);

        this.imageObject = this.add.image(
            -300,
            200,
            "title"
        );

        this.tweens.add({
            targets: this.imageObject,
            x: 375,
            duration: 1500,
            ease: "bezier"
        });

        this.imageObject.setScale(0.8);
    
        // progress to next scene
        // let space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        // space.on('down', () => {
        //     this.scene.start("scene_5");
        // })

        // progress to previous scene
        let left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        left.on('down', () => {
            this.scene.start("scene_3");
        });
    }

    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 1350,
    height: 825,
    backgroundColor: 0x00000,
    scene: [scene_1, scene_2, scene_3, scene_4],
}

let game = new Phaser.Game(config);