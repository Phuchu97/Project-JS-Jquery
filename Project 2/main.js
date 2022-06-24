
    function themHang() {
        let getTextName = document.getElementById('getName').value,
        getScoreMath = document.getElementById('getMath').value,
        getScorePhysical = document.getElementById('getPhy').value,
        getScoreChemistry = document.getElementById('getChe').value;
        let i = document.getElementById('sttPoint').value;
        i++;
        document.getElementById('sttPoint').value = i;
        let testScore ={ 
            stt: i,
            name: getTextName,
            math: getScoreMath,
            physical: getScorePhysical,
            chemistry: getScoreChemistry
        };
        let table = document.getElementById("table-point")
            row = table.insertRow(-1),
            cell1 = row.insertCell(0),
            cell2 = row.insertCell(1),
            cell3 = row.insertCell(2),
            cell4 = row.insertCell(3),
            cell5 = row.insertCell(4),
            cell6 = row.insertCell(5);
        cell1.innerHTML = testScore.stt;
        cell2.innerHTML = testScore.name;
        cell3.innerHTML = testScore.math;
        cell4.innerHTML = testScore.physical;
        cell5.innerHTML = testScore.chemistry;
        document.getElementById('getName').value = '';
        document.getElementById('getMath').value = '';
        document.getElementById('getPhy').value = '';
        document.getElementById('getChe').value = '';
    }

    function mediumScore() {
        let rows = document.getElementById('table-point').rows;
        for(let i = 1; i < rows.length; i++) {
            let diemToan = parseFloat(rows[i].cells[2].innerText);
            let diemLy = parseFloat(rows[i].cells[3].innerText);
            let diemHoa = parseFloat(rows[i].cells[4].innerText);
            let diemTrungBinh = (diemToan + diemLy + diemHoa)/3;
            rows[i].cells[5].innerText = diemTrungBinh.toFixed(1);
        }
    }
    function classify() {
        let rows = document.getElementById('table-point').rows;
        for (let i = 1; i < rows.length; i++) {
            let hocSinhGioi = rows[i].cells[5].innerText;
            if (hocSinhGioi > 8) {
                rows[i].style.color = 'red';
            }
        }
    }

