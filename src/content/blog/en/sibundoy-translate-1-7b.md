---
titulo: "Introducing Sibundoy-Translate-1.7B"
nombre: "Sibundoy-Translate-1.7B"
entradilla: "Our first model translates English into Spanish. It has 1.7 billion parameters and is built to run on the computers you already have. Making it taught us a lot, and we hope you find it useful."
autor: "Rubén Salas"
fecha: 2026-11-01
etiqueta: modelo
portada: ../../../assets/sibundoy1.png
portadaAlt: "Illustration of the Sibundoy Valley, in Putumayo, with green fields and misty mountains"
portadaPie: "The Sibundoy Valley, in Putumayo, Colombia. Illustration."
banderaLugar: ["#1E7B34", "#F2D21B", "#FFFFFF"]
# Borrador: no se publica hasta que Rubén complete los TODO y cambie esto a false. La fecha también es provisional.
borrador: true
---

<p class="aviso">Looking for the numbers, the recipe to run it or how we trained it? It's all in the <a href="#technical-section">technical section</a>, further down.</p>

## In short

- **What it does:** Sibundoy-Translate-1.7B is a model ready to translate from English into Spanish on your own computer, paragraph by paragraph.
- **Where it runs:** it takes about 1.3 GB of memory and runs at a good speed with or without a GPU.
- **How fast:** it translates a 900-word article in about 15 seconds on a 6 GB GPU, or in a minute without a GPU.
- **How much it improved:** it translates better than the model we started from on every test. In medicine it gains 5.8 COMET points (an automatic measure of translation quality).
- **Against others:** it doesn't yet beat slightly larger models, with 2 to 4 billion parameters. It comes close, but stays behind.
- **Where it stands out:** it keeps the formatting of web pages and documents, and it writes neutral Spanish, which makes it useful for any Spanish-speaking country.
- **What to improve:** literature, social media and texts with several paragraphs sent at once are still a bit hard for it (that's why we recommend sending the model one paragraph per request).

## Why a translator

I'm Rubén and I make ColIA. **Sibundoy-Translate-1.7B** comes from a personal need. Every day I try to learn something new about artificial intelligence and technology. Much of that content is published in English and isn't always available in Spanish. On top of that, the level of English in Colombia and much of Latin America is low, mine included.

I wanted to read that content without relying on the browser's translator or on paid services, which aren't within everyone's reach in our regions. Then I realized that today's models let us build personal software to solve our own needs. That's how my RSS reader was born: it translates articles, news and arXiv papers into Spanish with a model of its own, with no internet connection.

But another problem came up: finding a model small enough for any computer, without the latest hardware. And, at the same time, capable enough to translate texts with formulas, links, mentions or LaTeX well.

That's how Sibundoy-Translate-1.7B was born: an English-to-Spanish translator that fits on almost any computer, with no need for a GPU, and that almost[^1] solves the main problem of my RSS reader and of my search for learning in another language. It also let me experiment and learn, one of the aims of ColIA.

## Why Sibundoy

The name comes from the Sibundoy Valley, where I'm from. It's a region made up of four beautiful municipalities **(Sibundoy, Colón, San Francisco and Santiago)**, in Putumayo, in the south of Colombia. With it I want to honor my home, my town, my people, and the regions of Colombia and Latin America that we sometimes forget.

I also want to show that the Sibundoy Valley, Putumayo, Colombia and Latin America are full of talented people, able to build and create.

<aside class="nota"><strong>Personal note:</strong> you who are reading this, I'm sure you're one of those amazing, talented people. I want to tell you to fight for your dreams, build with passion, achieve what you set out to do, and help us make our beautiful regions more prominent, more recognized and full of opportunities for everyone. <em>If you'd like to join and help us at ColIA, write to us at <a href="mailto:hola@colia.org">hola@colia.org</a>!</em></aside>

## What we learned

This has been one of our most interesting and important experiments. It leaves us several useful lessons for the next versions of the model, which we hope will be even better.

- **Choose the teacher with data:** we tested four large models before using one to translate data. That helped us choose the best one: Gemma 4 31B.
- **The base model learned better than the chat model** for a task as specific as translating. We don't know why yet. Our hypothesis is that the base model doesn't carry the chat habits of the instruct model, so it learns the task without having to unlearn anything.
- **Save copies along the way:** while training v1 we had an outage and lost 80% of the work, about an hour. In v2, Colab shut the machines down after 20 minutes because nobody was sending them commands. Since we had learned the lesson from v1, we could resume each time from the last saved copy.
- **Measuring will always tell us the truth about failures:** we thought the limit would be text length. When we measured it, we saw it was something else: paragraph breaks. The model fails with texts that have several paragraphs separated by blank lines.
- **Test the recipe the way someone else will use it:** on our usual server everything worked. With the clean command, the answers came back empty because an option was missing: without it, the model sent the translation as reasoning instead of as the answer.

## What's next

We want to keep learning and improving. The next version will translate in both directions, from English to Spanish and from Spanish to English. And we'll try to close the gap with larger models with these steps:

- **Deep cleaning of the data:** discard human translations that are too loose, incomplete or of low quality, which can contaminate the training.
- **Add examples with several paragraphs:** that way we'll try to fix the stops at paragraph breaks and the need to send one paragraph per request.
- **Try a pure translator, without chat:** one that receives only the language pair (input and output) and the text, and returns the translation. That way there's no reasoning to turn off and no instruction to remember, and the model is easier to use.
- **Train with preferences:** teach it to prefer the better of two translations of the same sentence, so it chooses more natural and faithful translations.
- **More:** later on we want to try a smaller version, so it runs twice as fast on a laptop without a GPU and perhaps reaches mobile phones.

<aside class="nota"><strong>Reminder:</strong> <em>if you'd like to join and help us at ColIA to build and learn how to do things better, write to us at <a href="mailto:hola@colia.org">hola@colia.org</a>! We'll be glad to welcome you.</em></aside>

---

## Technical section

From here on, the details:
- What exactly it is
- How we trained it
- How we measured it
- The recipe to run it
- Its licenses

## What it is

| | |
|---|---|
| Starting model | LFM3-1.7B-Base, by <a href="https://www.liquid.ai/">Liquid AI</a> |
| Method | Rank-64 LoRA (a fine-tuning method that trains only a small part of the model), one pass over the data |
| Task | Translation from English into Spanish, keeping HTML and Markdown |
| Training data | 70,605 text pairs from open sources, plus 500 pairs for validation |
| Parameters | 1.7 billion |
| File size | 1.1 GB (GGUF Q4_K_M) |
| License | LFM Open License v1.0, inherited from LFM3 (see [Licenses](#licenses)) |
| Model | [Hugging Face](https://huggingface.co/colia-labs/Sibundoy-Translate-1.7B) (also in [GGUF](https://huggingface.co/colia-labs/Sibundoy-Translate-1.7B-GGUF)) |
| Code | [GitHub](https://github.com/colia-labs/sibundoy-translate) |

## How we made it

### The data

We gathered about 71,000 text pairs in three nearly equal parts: news, general texts and science. We wanted a translator that was good for more than news.

- **News:** Wikinews and Global Voices.
- **General texts:** FineTranslations and sentences from Tatoeba.
- **Science and technology:** abstracts from PLOS and SciELO (medicine, biology, psychology, education…), arXiv papers and the Spanish Python documentation.

The pairs have three origins:

| Origin | Pairs | Sources |
|---|---|---|
| Human translation | 36% | Global Voices, SciELO (the authors themselves), the Python documentation and Tatoeba |
| Spanish written by a person; English translated by a machine | 28% | FineTranslations: Spanish web pages that Hugging Face translated into English with Gemma 3 27B. We use it the other way round, so the model learns to write human Spanish |
| Translated by a "teacher" model | 36% | Wikinews, PLOS and arXiv, translated by Gemma 4 31B and, to a lesser extent, by GLM 5.3 Flash |

As we mentioned above, before choosing the teacher we measured four candidates on the same tests, and Gemma 4 31B won.

Then we cleaned: we removed repeated pairs, untranslated ones and those that looked like the tests. We checked the teacher's translations automatically: numbers, links, HTML tags and length. There were 760 serious errors, 0.5% of the total: most were fixed and the rest were discarded.

### The training

We trained two versions at the same time: one on the LFM3 base model and another on its chat version (instruct). Each ran on a Google Colab L4 GPU for about 6 hours.

**The base version won on every measure.** That's why Sibundoy-Translate starts from LFM3-1.7B-Base.

It didn't work the first time. Colab shut the machines down after 20 minutes of training, and it took us three attempts to understand why. The cause: if nobody sends the machine commands, Colab considers it abandoned, even while it's working. We solved it by sending it a minimal command every two minutes and saving a copy of the training every 250 steps. Thanks to those copies, each outage cost us only a few minutes.

It started as a night that promised to be long, because of the Colab outages. Once we found the cause, the training ran to the end with no further setbacks.

## How well it translates

We use two measures:

- **COMET:** scores from 0 to 100 whether the translation keeps the meaning of the original. It's the one that matters most.
- **chrF:** measures how closely it matches a human translation, character by character.

### Against its starting model

| Test | LFM3-1.7B | Sibundoy-Translate-1.7B | Gain |
|---|---|---|---|
| WMT24++ (en → es) | 74.9 | **80.4** | +5.5 |
| Our test (news, web and sentences with HTML and Markdown) | 84.8 | **87.6** | +2.8 |
| Biomedical (Medline abstracts) | 81.1 | **86.9** | **+5.8** |
| News (NTREX) | 81.4 | **86.1** | +4.6 |
| FLORES+ (Wikipedia) | 82.9 | **86.0** | +3.2 |
| Health (TICO-19) | 85.2 | **88.1** | +2.9 |

COMET scores. WMT24++ is a public Google test with social media, literature, speeches and news. Its references are in Mexican Spanish. The other four are public tests on a specific topic.

It improved most in medicine: +5.8 points. That's exactly what's most common in the data, between PLOS and SciELO abstracts.

### Against other small models

Here we don't win, and we'd rather say so, because at **ColIA** every defeat is also a victory: it lets us learn and improve.

| Model | WMT24++ | Biomedical | FLORES+ | News (NTREX) | Health (TICO-19) |
|---|---|---|---|---|---|
| **Sibundoy-Translate-1.7B** | 80.4 | 86.9 | 86.0 | 86.1 | 88.1 |
| Tower+ 2B | 81.7 | 87.2 | 86.8 | 86.8 | **88.9** |
| Gemma 4 E2B | 82.4 | 87.2 | 86.6 | 86.2 | 88.4 |
| TranslateGemma 4B | 82.8 | **87.5** | **87.3** | 86.6 | 88.2 |
| Gemma 4 E4B | **82.9** | 87.4 | 87.1 | **87.0** | 88.7 |

COMET scores. Sibundoy is between 0.1 and 2.5 points below models with 2 to 4 billion parameters. We thought it would win in science and medicine, because they're common in its data, but it didn't: it loses there too, by a little. What it lacks is general translation quality, not one specific kind of text.

We checked that the tests weren't in our data: practically none of them repeats, except 0.3% of TICO-19 and 2.1% of FLORES+.

### Where we do win

**It keeps the formatting.** Our test has 213 texts, and 47 contain HTML or Markdown. Sibundoy kept the formatting in 210 of the 213; the other small models, between 189 and 208. If you translate web pages or documentation, this matters as much as quality, and it's exactly our strong point.

**It writes neutral Spanish.** On WMT24++ it used forms from Spain in 0.4% of sentences; the other small models, between 1.4% and 1.9%. It didn't use regionalisms from a single country either, such as *voseo* or «ahorita». Our detector only looks for specific words, so it wouldn't catch a subtler regional style.

## Recommended recipe

We measured it on the two machines we use for our recipes: a desktop with a 6 GB RTX 3050 and a laptop without a GPU (i7-13620H). We used llama.cpp b11940 on the laptop and b11946 on the desktop.

| | Desktop · RTX 3050 6 GB | Laptop · CPU only |
|---|---|---|
| Generation | **121 tok/s** | **36 tok/s** |
| Reading the input text | ~4,600 tok/s | ~215 tok/s |
| Memory with `-c 4096` | ~1.3 GB of VRAM | ~1.2 GB of RAM |
| 923-word article, paragraph by paragraph | **15.5 s** | **57 s** |

tok/s means tokens per second; a token is a piece of a word. It runs exactly as fast as LFM3-1.7B: the fine-tuning doesn't change the architecture.

**Desktop (GPU):**

```sh
llama-server -m Sibundoy-Translate-1.7B-Q4_K_M.gguf \
  -ngl 99 -c 4096 --reasoning off \
  --temp 0.1 --top-k 50 --repeat-penalty 1.1
```

**Laptop (CPU only):**

```sh
llama-server -m Sibundoy-Translate-1.7B-Q4_K_M.gguf \
  -lm none -t 6 -tb 16 -fa off -c 4096 --reasoning off \
  --temp 0.1 --top-k 50 --repeat-penalty 1.1
```

| Option | Why |
|---|---|
| **One paragraph per request** | The most important one. If the text has several blocks separated by blank lines, it often translates the first one and stops, or repeats a block over and over. With texts of ~4,000 tokens, none of 6 came out complete. With a single block, it always comes out complete. |
| `--reasoning off` | **Required.** Without it, llama-server stores the translation as "reasoning" and the answer comes back empty. |
| `-c 4096` | Enough for a long paragraph and its translation. 32,768 tokens fit in 1.6 GB, but they add nothing: giving it more text at once doesn't improve the translation. |
| `--repeat-penalty 1.1` | Without it, the similarity to the reference goes up a little, but in one test it went into a loop and repeated «¡» hundreds of times. |
| `-lm none -t 6 -tb 16 -fa off` (CPU) | The same settings we measured for LFM3-1.7B on this laptop. It loads the model into RAM, uses one thread per performance core to generate and all of them to read, and without FlashAttention it runs faster on this CPU. |
| Q4_K_M | The Q8_0 version didn't translate better (COMET differences within noise) and is 70% larger. |

## Try it

The model is on Hugging Face, at [colia-labs/Sibundoy-Translate-1.7B](https://huggingface.co/colia-labs/Sibundoy-Translate-1.7B), and in GGUF for llama.cpp at [colia-labs/Sibundoy-Translate-1.7B-GGUF](https://huggingface.co/colia-labs/Sibundoy-Translate-1.7B-GGUF). The code we used to make it is on GitHub, at [colia-labs/sibundoy-translate](https://github.com/colia-labs/sibundoy-translate).

Start it with the recipe above that matches your computer. Then send each paragraph as a user message to `/v1/chat/completions`, with its exact instruction, a blank line and the text:

```text
Translate the following text from English into Spanish. Keep any HTML tags and Markdown formatting exactly as they are. Reply with the translation only.

The **new vaccine** reduced hospital admissions by 40% in [the trial](https://example.org).
```

Answer:

```text
La **nueva vacuna** redujo las admisiones hospitalarias en un 40% en el [ensayo](https://example.org).
```

It also shows one of its errors: «admisiones hospitalarias» is a calque of the English "hospital admissions". Natural Spanish would be «ingresos hospitalarios».

## What it doesn't do well

- **It translates worse than slightly larger models**, such as Tower+ 2B, Gemma 4 E2B or TranslateGemma 4B. The gap ranges from 0.1 to 2.5 COMET points.
- **Literature and social media** are its weakest points: colloquial phrases, wordplay, irony.
- **Calques from English**, such as «admisiones hospitalarias» instead of «ingresos hospitalarios».
- **Several paragraphs at once.** With blocks separated by blank lines, it often translates only the first one or goes into a loop. You have to give it one paragraph per request (see the recipe). It was almost always trained with one paragraph per example, and it learned to stop when one ends.
- **Only from English into Spanish.** It didn't learn the opposite direction.
- **It needs its instruction and `--reasoning off`.** Without the instruction it behaves like a chat; without the option, the answer comes back empty.
- **It sometimes drops the HTML tag that wraps the whole text**, such as an opening `<p>`, though it keeps the ones inside.

## Licenses

**The model.** Sibundoy-Translate inherits the LFM Open License v1.0 from LFM3, because it contains that model. It's free for research and for commercial use by people and companies with less than USD 10 million in annual revenue. Above that figure, commercial use isn't covered and you need to ask Liquid AI for permission. It isn't an open-source license in the strict sense: these are open weights with a commercial limit. With the model we publish the license text and state that it's a modified version of LFM3-1.7B-Base.

**The data.** We don't publish the training data, only the model. These are its sources and licenses:

| Source | What it provides | License |
|---|---|---|
| Global Voices (also via OPUS) | News, human translation | CC BY 3.0 |
| SciELO | Scientific abstracts translated by their authors, only from journals licensed CC BY | CC BY |
| Wikinews | News | CC BY 2.5 and 4.0 |
| PLOS | Scientific abstracts | CC BY 4.0 |
| FineTranslations | Spanish web texts | ODC-By 1.0, and the Common Crawl terms of use |
| Tatoeba | Short sentences | CC BY 2.0 FR |
| arXiv | Titles and abstracts | CC0 (arXiv metadata) |
| Spanish Python documentation | Technical documentation | CC0 (translation) and the PSF license |

**The models that translated part of the data:** Gemma 4 31B (Apache 2.0), GLM 5.3 Flash (MIT) and, in about 1,300 arXiv pairs, DeepSeek V4.1 Flash (MIT) or MiniMax M3 (MiniMax Community License).

## Notice

Sibundoy-Translate-1.7B is our first model, and it's new: you may find errors and failures we don't know about yet. We'd love to get as much feedback as possible to know where to improve. Any comment is welcome on our channels. It isn't a perfect model, but we keep working to improve it. We'd love your help!

---

[^1]: Almost, because Sibundoy-Translate-1.7B is a starting point that anyone can fine-tune for what they need. I'll fine-tune it for the specific needs of my RSS reader.
