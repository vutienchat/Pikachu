class AudioGame {
   fileAudio: string = "file_example_MP3_700KB.mp3";
   audio:HTMLAudioElement = this.createAudio();
   createAudio():HTMLAudioElement{
      const audio = new Audio(this.fileAudio);
      audio.loop = true;
      return audio;
   }
   playAudio = (): void =>{
      this.audio.play();
   }
   pauseAudio = (): void =>{
      this.audio.pause();
   }
   startAudio = (): void =>{
      this.audio.load();
      this.audio.play();
   }
}
export default new AudioGame;
