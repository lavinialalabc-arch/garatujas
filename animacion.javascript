<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Site Animado</title>

<style>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
}

body{
  height:100vh;
  overflow:hidden;

  display:flex;
  justify-content:center;
  align-items:center;

  background:linear-gradient(#2b0000,#8b0000);
}

/* chuva */

.chuva{
  position:absolute;
  width:100%;
  height:100%;
}

.gota{
  position:absolute;
  top:-100px;

  width:2px;
  height:80px;

  background:rgba(255,0,0,0.7);

  animation:cair linear infinite;
}

.gota:nth-child(1){
  left:10%;
  animation-duration:1s;
}

.gota:nth-child(2){
  left:20%;
  animation-duration:1.5s;
}

.gota:nth-child(3){
  left:30%;
  animation-duration:0.9s;
}

.gota:nth-child(4){
  left:40%;
  animation-duration:1.2s;
}

.gota:nth-child(5){
  left:50%;
  animation-duration:1s;
}

.gota:nth-child(6){
  left:60%;
  animation-duration:1.4s;
}

.gota:nth-child(7){
  left:70%;
  animation-duration:0.8s;
}

.gota:nth-child(8){
  left:80%;
  animation-duration:1.1s;
}

.gota:nth-child(9){
  left:90%;
  animation-duration:1.3s;
}

@keyframes cair{

  from{
    transform:translateY(-100px);
  }

  to{
    transform:translateY(120vh);
  }

}

/* caixa */

.caixa{
  position:relative;
  z-index:10;

  background:rgba(0,0,0,0.4);

  padding:40px;
  border-radius:20px;

  text-align:center;

  color:white;

  backdrop-filter:blur(5px);

  animation:flutuar 3s infinite ease-in-out;
}

@keyframes flutuar{

  0%{
    transform:translateY(0);
  }

  50%{
    transform:translateY(-10px);
  }

  100%{
    transform:translateY(0);
  }

}

h1{
  margin-bottom:15px;
  color:#ff4d4d;
}

button{

  margin-top:20px;

  padding:12px 25px;

  border:none;
  border-radius:10px;

  background:#ff1a1a;

  color:white;

  font-size:16px;

  cursor:pointer;

  transition:0.3s;
}

button:hover{

  background:#ff4d4d;

  transform:scale(1.05);

}

</style>
</head>

<body>

<div class="chuva">

<div class="gota"></div>
<div class="gota"></div>
<div class="gota"></div>
<div class="gota"></div>
<div class="gota"></div>
<div class="gota"></div>
<div class="gota"></div>
<div class="gota"></div>
<div class="gota"></div>

</div>

<div class="caixa">

<h1>🌧️ Red Rain</h1>

<p>
Uma tela animada com chuva vermelha ✨
</p>

<button onclick="mensagem()">
Clique aqui
</button>

</div>

<script>

function mensagem(){

  alert("Bem-vinda ao site ❤️");

}

</script>

</body>
</html>
