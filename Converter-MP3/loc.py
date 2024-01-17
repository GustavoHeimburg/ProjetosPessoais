from flask import Flask, render_template, request, jsonify
import os
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert')
def convert():
    video_url = request.args.get('videoUrl')

    if video_url:
        try:
            # Verifica se o youtube-dl está disponível
            if subprocess.call("youtube-dl --version", shell=True) != 0:
                raise RuntimeError("O youtube-dl não está instalado ou não está disponível no PATH.")

            # Converte o vídeo para MP3
            os.system(f'youtube-dl -x --audio-format mp3 -o "downloads/%(title)s.%(ext)s" {video_url}')

            # Obtém o nome do arquivo convertido
            filename = subprocess.check_output(f'youtube-dl --get-filename -o "downloads/%(title)s.%(ext)s" {video_url}', shell=True)
            filename = filename.decode('utf-8').strip()

            # Obtém a URL de download do MP3
            download_url = f'/downloads/{filename}'

            return jsonify({'success': True, 'downloadUrl': download_url})

        except subprocess.CalledProcessError as e:
            return jsonify({'success': False, 'message': f"Erro ao executar youtube-dl: {e.output.decode('utf-8')}"})
        except Exception as e:
            return jsonify({'success': False, 'message': str(e)})

    return jsonify({'success': False, 'message': 'Link do vídeo não fornecido.'})

if __name__ == '__main__':
    if not os.path.exists('templates'):
        os.makedirs('templates')
    app.run(debug=True)
