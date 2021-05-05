
/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

function tryRequire(modulePath) {
  try {
    let f = require(modulePath);
  }
  catch (err) {
    console.log(modulePath.slice(3), '-', err.name);
    let f = function() {};
  }
  return f;
}

module.exports = tryRequire;
