async function convertToMP3() {
    var videoUrl = document.getElementById("videoUrl").value;

    if (videoUrl) {
        try {
            const response = await fetch(`/convert?videoUrl=${encodeURIComponent(videoUrl)}`);
            const data = await response.json();

            if (data.success) {
                const downloadLink = document.getElementById("downloadLink");
                downloadLink.href = data.downloadUrl;
                downloadLink.style.display = "block";
            } else {
                alert(data.message || "Erro ao converter o vídeo.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao processar a solicitação.");
        }
    } else {
        alert("Por favor, insira um link do YouTube.");
    }
}
