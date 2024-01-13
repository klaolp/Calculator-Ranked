let op = 0;
let ranked = 0;
let nivel = " ";

do{
  ranked = calc_ranked(90,3);
  nivel = classify_ranked(ranked);
  console.log(`O Herói tem de saldo de ${ranked} está no nível de ${nivel}`);
}while(op!=0)

function calc_ranked(victorys, losts){
  let ranked;

  if(victorys > losts){
    ranked = victorys - losts;
  }else{
    ranked = losts - victorys;
  }

  return ranked;
}

function classify_ranked(ranked){
  if(ranked<=10){
    return "ferro";
  }else if(ranked <= 20){
    return "bronze";
  }else if(ranked <= 50){
    return "prata";
  }else if(ranked <= 80){
    return "ouro";
  }else if(ranked <= 90){
    return "diamante";
  }else if(ranked <= 100){
    return "lendario";
  }else{
    return "imortal";
  }
}