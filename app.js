const exchange = 0.026

function update() {
  step = parseInt(document.querySelector('input[name="step"]:checked').value, 10)
  partition = document.querySelector('input[name="partition"]:checked').value
  base_currency = document.querySelector('input[name="base_currency"]:checked').value
  console.log(step, partition, base_currency)
  tbd.innerHTML = ""
  for (var i = step; i <= step * 20; i += step) {
    var row = document.createElement("tr")
    var cell1 = document.createElement("td")
    var cell2 = document.createElement("td")
    row.classList.add('big')
    if (base_currency == 'l') {
      cell1.innerText = i.toLocaleString('en', {
        useGrouping: true
      })
      cell2.innerText = parseInt(i * exchange).toLocaleString('en', {
        useGrouping: true
      })
    } else {
      cell2.innerText = i.toLocaleString('en', {
        useGrouping: true
      })
      cell1.innerText = parseInt(i / exchange).toLocaleString('en', {
        useGrouping: true
      })
    }
    row.appendChild(cell1)
    row.appendChild(cell2)
    tbd.appendChild(row)
    if (i < step * 20) {
      for (var j = 1; j < partition; j += 1) {
        var row = document.createElement("tr")
        var cell1 = document.createElement("td")
        var cell2 = document.createElement("td")
        x = i + (j * step / partition)
        if (base_currency == 'l') {
          cell1.innerText = x.toLocaleString('en', {
            useGrouping: true
          })
          cell2.innerText = parseInt(x * exchange).toLocaleString('en', {
            useGrouping: true
          })
        } else {
          cell2.innerText = x.toLocaleString('en', {
            useGrouping: true
          })
          cell1.innerText = parseInt(x / exchange).toLocaleString('en', {
            useGrouping: true
          })
        }
        row.appendChild(cell1)
        row.appendChild(cell2)
        tbd.appendChild(row)
      }
    }
  }
}

document.querySelectorAll('input[type=radio]').forEach(e => e.onchange = update)
window.onload = update
