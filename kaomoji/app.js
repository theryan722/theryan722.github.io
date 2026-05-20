const items = [
    { 'kaomoji': '⸜(｡˃ ᵕ ˂ )⸝♡', tags: 'happy,love' },
    {'kaomoji': '(˶ᵔ ᵕ ᵔ˶) ‹𝟹', tags: 'happy,love'},
    {'kaomoji': '₍ᐢ. .ᐢ₎ ₊˚⊹♡', tags: 'cute,affection'},
    {'kaomoji': '( ˶˘ ³˘)♡', tags: 'kiss,love,affection'},
    {'kaomoji': '(˶>⩊<˶)', tags: 'blush,cute'},
    {'kaomoji': 'ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧', tags: 'thumbs up, happy'},
    {'kaomoji': '(╥‸╥)', tags: 'sad,cry'},
    {'kaomoji': '(‿ˠ‿)', tags: 'ass,butt'},
    {'kaomoji': 'Ɑ͞ ̶͞ ̶͞ ̶͞ لں͞', tags: 'penis,dick'},
    {'kaomoji': '(¬`‸´¬)', tags: 'angry,annoyed'},
    {'kaomoji': '( •̀ ᴖ •́ )', tags: 'angry,annoyed'},
    {'kaomoji': '(  •̀⤙•́  )', tags: 'angry,annoyed'},
    {'kaomoji': '(¬_ ´¬ )', tags: 'annoyed,side eye'},
    {'kaomoji': 'ಠ_ಠ', tags: 'disapproval,annoyed'},
    {'kaomoji': '(˶ᵔ ᵕ ᵔ˶)', tags: 'blush,happy'},
    {'kaomoji': '(ง •̀_•́)ง', tags: 'angry,determined,fight'},
    {'kaomoji': '(˶ˆᗜˆ˵)', tags: 'happy,excited'},
    {'kaomoji': '( • ̀ω•́ )✧', tags: 'proud,confident,determined'},
    {'kaomoji': '(ꐦ • ᴗ •)', tags: 'angry,frustrated,annoyed'},
    {'kaomoji': 'ς(≖_≖ )ﾉ🔪', tags: 'annoyed,kill,murder,stab'},
    {'kaomoji': '(¬_¬)', tags: 'annoyed,disapproval'},
    {'kaomoji': '¯\\_(ツ)_/¯', tags: 'shrug,indifferent'},
    {'kaomoji': '٩(^ᗜ^ )و ´-', tags: 'happy,excited,yay'},
    {'kaomoji': '(ㅅ´ ˘ `)', tags: 'dream,peaceful,happy'},
    {'kaomoji': 'ദ്ദി ˉ͈̀꒳ˉ͈́ )✧', tags: 'thumbs up,happy'},
    {'kaomoji': '(╥﹏╥)', tags: 'cry,sad'},
    {'kaomoji': '(•́ ᴖ •̀)', tags: 'sad'},
    {'kaomoji': 'ᕦ(ò_óˇ)ᕤ', tags: 'strong,flex'},
    {'kaomoji': 'ᕙ( ˵ •̀ ᴗ - ˵ )ᕗ ✧', tags: 'strong,flex,wink'},
    {'kaomoji': 'ᕙ( •̀ ᗜ •́)ᕗ', tags: 'strong,flex'},
    {'kaomoji': '( ˶°ㅁ°) !!', tags: 'wow,shock'},
    {'kaomoji': '₍₍⚞(˶˃ ꒳ ˂˶)⚟⁾⁾', tags: 'wow,excited'},
    {'kaomoji': '( •̯́ ₃ •̯̀)', tags: 'worried'},
    {'kaomoji': '(˵ ¬ᴗ¬˵)', tags: 'blush'},
    {'kaomoji': '(˵ ¬  ؂ ¬˵)', tags: 'blush'},
    {'kaomoji': '( ´ཀ` )', tags: 'drool'},
    {'kaomoji': '╭∩╮( •̀_•́ )╭∩╮', tags: 'angry,middle finger'},
    {'kaomoji': '( •̀ - •́ )', tags: 'angry,annoyed'},
    {'kaomoji': '(╯°□°）╯︵ ┻━┻', tags: 'angry,frustrated,table flip'},
    {'kaomoji': '( -_•)╦̵̵̿╤─', tags: 'sniper,gun,shoot'},
    {'kaomoji': 'ヾ(๑╹◡╹)ﾉ🔪', tags: 'stab'},
    {'kaomoji': 'ς(≖_≖ )ﾉ🔪', tags: 'stab'},
    {'kaomoji': '(っ- ‸ - ς)', tags: 'close eyes'},
    {'kaomoji': '(ó﹏ò｡)', tags: 'scared,worried'},
    {'kaomoji': '\(”˚☐˚)/', tags: 'scared,panic'},
    {'kaomoji': '〜⁠(⁠꒪⁠꒳⁠꒪⁠)⁠〜', tags: 'dont know,hehe,shrug'},
    {'kaomoji': '(｡ᵕ ◞ _◟)', tags: 'tired'},
    {'kaomoji': '(っ˕ -｡)ᶻ 𝗓 𐰁', tags: 'tired,sleepy'},
    {'kaomoji': 'ʕ•ᴥ•ʔ', tags: 'bear,cute'},
    {'kaomoji': 'ᕦʕ •ᴥ•ʔᕤ', tags: 'bear,strong,flex'},
    {'kaomoji': 'ฅ^>⩊<^ ฅ', tags: 'cat,cute'},
    {'kaomoji': '≽^•⩊•^≼', tags: 'cat'},
    {'kaomoji': '≽(◉˕ ◉ ≼マ', tags: 'cat,angry'},
    {'kaomoji': '(ㆆ _ ㆆ)', tags: ''},
    {'kaomoji': '(˶ᵔᗜᵔ˶)ﾉﾞ', tags: 'wave,hello,goodbye'},
    {'kaomoji': '(ᵔᵕᵔ)◜', tags: 'wave,hello,goodbye'},
    {'kaomoji': '♪┏(・o･)┛♪', tags: 'dance,party'},
    {'kaomoji': '‎‧₊˚✧🪩✧˚₊‧', tags: 'dance,party'},
    {'kaomoji': '>ᴗ<', tags: 'hehe,smile'},
    {'kaomoji': '( ͡° ͜ʖ ͡°)', tags: 'lenny'},
    {'kaomoji': 'V●ᴥ●V', tags: 'dog'},
    {'kaomoji': '૮₍ • ᴥ • ₎ა', tags: 'dog'},
    {'kaomoji': '૮₍｡•̀ ﻌ •́｡₎ა', tags: 'dog,determined'},
    {'kaomoji': '(￣ω￣;)', tags: 'confusion'},
    {'kaomoji': '(￢_￢)', tags: 'doubt,side eye'},
    {'kaomoji': 'C= C= C= C= C=┌(;・ω・)┘', tags: 'running'},
    {'kaomoji': '(=^･ω･^=)', tags: 'cat'},
    {'kaomoji': 'ヾ(・ω・)メ(・ω・)ノ', tags: 'friends'},
    {'kaomoji': 'ヽ( ⌒o⌒)人(⌒-⌒ )ﾉ', tags: 'friends,high five'},
    {'kaomoji': 'ヘ( ^o^)ノ＼(^_^ )', tags: 'friends,high five'},
    {'kaomoji': '( ◞•̀д•́)◞◟(•̀д•́◟ )', tags: 'argue,fight'},
    {'kaomoji': '┐(￣ヘ￣)┌', tags: 'shrug,indifferent'},
    {'kaomoji': '(>_<)', tags: 'pain,frustration'},
    {'kaomoji': '(｡•́︿•̀｡)', tags: 'sad,disappointed'},
    {'kaomoji': '(´♡‿♡)', tags: 'love'},
    {'kaomoji': "(っ'-')╮=͟͟͞🍋)`-' )", tags: 'slap,throw lemon,angry,boo'},
    {'kaomoji': "(っ'-')╮=͟͟͞🍅)`-' )", tags: 'slap,throw tomato,angry,boo'},
    {'kaomoji': 'ヽ(°〇°)ﾉ', tags: 'wow,shock'},
    {'kaomoji': '( ´･･)ﾉ(._.`)', tags: 'pat,comfort'},
    {'kaomoji': '(*/ω＼*)', tags: 'shyness,blush'},
    {'kaomoji': '( •_•)>⌐■-■', tags: 'sunglasses,deal with it'},
    {'kaomoji': '(⌐■_■)', tags: 'sunglasses,cool,deal with it'},
    {'kaomoji': '\^o^/', tags: 'yay,excited'},
    {'kaomoji': '(；′⌒`)', tags: 'sad,disappointed'},
    {'kaomoji': '◉_◉', tags: ''}
];

const resultsEl = document.getElementById('results');
const searchEl = document.getElementById('search');
const toastEl = document.getElementById('toast');

let toastTimer;

function showToast(message) {
    if (!toastEl) {
        return;
    }

    toastEl.textContent = message;
    toastEl.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toastEl.classList.remove('show');
    }, 1200);
}

function normalizeTags(tags) {
    return tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);
}

function renderList(query = '') {
    if (!resultsEl) {
        return;
    }

    const search = query.trim().toLowerCase();

    const filtered = items.filter((item) => {
        if (!search) {
            return true;
        }

        return item.tags.toLowerCase().includes(search);
    });

    if (filtered.length === 0) {
        resultsEl.innerHTML = '<p class="empty">No matching emoji found.</p>';
        return;
    }

    resultsEl.innerHTML = filtered
        .map((item) => {
            const tags = normalizeTags(item.tags).join(' • ');
            const escapedKaomoji = item.kaomoji.replace(/"/g, '&quot;');

            return `
                <button class="item" type="button" data-kaomoji="${escapedKaomoji}" aria-label="Copy ${escapedKaomoji}">
                    <p class="kaomoji">${item.kaomoji}</p>
                    <p class="tags">${tags}</p>
                </button>
            `;
        })
        .join('');
}

resultsEl?.addEventListener('click', async (event) => {
    const button = event.target.closest('.item');
    if (!button) {
        return;
    }

    const value = button.getAttribute('data-kaomoji');
    if (!value) {
        return;
    }

    try {
        await navigator.clipboard.writeText(value);
        showToast(`Copied: ${value}`);
    } catch (error) {
        showToast('Clipboard failed');
    }
});

searchEl?.addEventListener('input', (event) => {
    renderList(event.target.value || '');
});

renderList();