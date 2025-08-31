const contatoInput = document.querySelector("#contato");

contatoInput.addEventListener("input", function () {
  let valor = contatoInput.value.replace(/\D/g, "");

  if (valor.length > 11) valor = valor.slice(0, 11);

  if (valor.length <= 10) {
    valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  } else {
    valor = valor.replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4})$/, "($1) $2 $3-$4");
  }

  contatoInput.value = valor;
});

const form = document.querySelector("#form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = document.querySelector("button");
  button.disabled = true;

  const nome = document.querySelector("#nome").value;
  const sobrenome = document.querySelector("#sobrenome").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#contato").value;

  if (phone.replace(/\D/g, "").length < 10) {
    alert("Telefone para contato inválido.");
    button.disabled = false;
    return;
  }

  const name = nome.trim().concat(" ", sobrenome.trim());

  const data = { name, email, phone };

  try {
    const response = await fetch(
      "https://desafio-tecno-system-api.onrender.com/api/reserve",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.status == 200) {
      alert("Reserva confirmada!");
    } else if (response.status == 409) {
      alert("Esse email já possui uma reserva confirmada.");
    }
  } catch (error) {
    alert("Erro ao realizar sua reserva");
  } finally {
    button.disabled = false;
  }
});
