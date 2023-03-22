export function AUTHEN(id, idCard, fullname, role) {
  return { type: 'AUTHEN', id, idCard, fullname, role };
}

export function UAUTHEN() {
  return { type: 'UAUTHEN' };
}

export function USERINFO() {
  return { type: 'USERINFO' };
}

export function AUTHORITIES(id, idCard, fullname, role){
  return { type: 'AUTHORITIES',id,idCard,fullname,role};
}
