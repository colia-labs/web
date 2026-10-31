---
titulo: "Introducing Sibundoy-Translate-1.7B"
nombre: "Sibundoy-Translate-1.7B"
entradilla: "Our first model translates English into Spanish. It has 1.7 billion parameters, so it can run on a modest computer."
fecha: 2026-12-01
etiqueta: modelo
portada: ../../../assets/sibundoy.png
portadaAlt: "Illustration of the Sibundoy Valley, in Putumayo, with green fields and misty mountains"
portadaPie: "The Sibundoy Valley, in Putumayo, Colombia. Illustration."
banderaLugar: ["#1E7B34", "#F2D21B", "#FFFFFF"]
# Borrador: no se publica hasta que Rubén complete los TODO y cambie esto a false. La fecha también es provisional.
borrador: true
---

## Why a translator

TODO: why we built it, the problem it solves and who it's for. Two or three short paragraphs.

## What it is

| | |
|---|---|
| Base model | LFM3-1.7B, by Liquid AI (TODO: Base or Instruct) |
| Task | Translation from English into Spanish |
| Training data | About 70,000 sentence pairs from open sources |
| Parameters | 1.7B |
| License | TODO |

## How well it translates

We measured it against its base model on the same test set. TODO: name of the test set and what the score means, in one line.

| Model | TODO: metric | Speed |
|---|---|---|
| Sibundoy-Translate-1.7B | TODO | TODO tok/s |
| LFM3-1.7B | TODO | TODO tok/s |

Measured on TODO: hardware. tok/s means tokens per second; a token is a piece of a word.

## Try it

The model is on Hugging Face at `colia-labs/Sibundoy-Translate-1.7B`.

```sh
# TODO: command or code to run it
```

## What it doesn't do well

TODO: known limitations. Types of text, length, dialects. Honest and specific.

## Why Sibundoy

Sibundoy is a town in the Sibundoy Valley, in Putumayo, in the south of Colombia. It's one of those places that deserve to be better known.

Our models are named in honor of places like it: beautiful, diverse and full of talent, but not always on the map. Models that share a place form a family, so this is the first of the Sibundoy family.

## What's next

TODO: next steps for the model.
