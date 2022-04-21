let musics = [
    "A New History-W59memcLQqc.mp3",
    "Addiction-FUHf4bAbdaw.mp3",
    "Antibiotics Apocalypse-Hs2yvPLqtsw.mp3",
    "Are You Alone-Tg9FtoUszN4.mp3",
    "Atoms-eUO98pRNIlg.mp3",
    "Automation-2uV-US8mW1k.mp3",
    "Bacteriophage – Soundtrack (2018)-T-APn7xt3NM.mp3",
    "Banking-k0JPhK1PqrU.mp3",
    "Bees-fBual18PnT0.mp3",
    "Big Bang-1Y915_9Xp-4.mp3",
    "Black Hole Bomb – Soundtrack (2018)-u0yUmWt4v_Q.mp3",
    "Black Holes 2-CswowCYxUbg.mp3",
    "Black Holes-63F4vhIrUgc.mp3",
    "Cannabis – Soundtrack (2018)-ghXeZ8MAXng.mp3",
    "Conspiracy-RA8iaRgyHww.mp3",
    "Crispr-Lw_nC1kStmw.mp3",
    "Cure Aging-HYPVAlcfz0s.mp3",
    "Dark Matter-Dark Energy-Bz1f5dWt6Ws.mp3",
    "Deep Sea Nuke – Soundtrack (2018)-IQaR1KfEew0.mp3",
    "Ebola-8pECVG8tOP8.mp3",
    "Egoistic Altruism – Soundtrack (2018)-TRHFnl7VLzU.mp3",
    "European Union-uOgTJZIxDzI.mp3",
    "Facebook-lORfuZsjNYs.mp3",
    "Fusion-Th9oZfcijEk.mp3",
    "G M O S-shdrOb2faAY.mp3",
    "Gamma Ray Bursts-ksEgOegTy4c.mp3",
    "Great Filter – Soundtrack (2018)-ZUU30oNfiuI.mp3",
    "Homeopathy – Soundtrack (2018)-UU1vZoOeGNE.mp3",
    "Life-EjC4hEcH67E.mp3",
    "Light-YffroG875Us.mp3",
    "Limits of Humanity-MZp-i1vZhgI.mp3",
    "Malaria-oqBvBUL_qnk.mp3",
    "Measles-lY8tWkObUns.mp3",
    "Microbiome-isFXHZI1QZk.mp3",
    "Moon Base – Soundtrack (2018)-gCSkWUnVf6Y.mp3",
    "Moons-Bj0TNlYoNL4.mp3",
    "Neutron Star-X6-XZ6KeZzE.mp3",
    "Ntds-paYe8Xn6oR8.mp3",
    "Nuclear Contra-wxLmJZKcBoE.mp3",
    "Nuclear Pro-AL3jUjxSoLM.mp3",
    "Nuclear-cyamfQ3imB8.mp3",
    "Optimistic Nihilism-5IR4x-5eyE4.mp3",
    "Overpopulation-kmnbACf0JuU.mp3",
    "Planet Earth-mHD2Suob23o.mp3",
    "Plastic Pollution – Soundtrack (2018)-o-NU0toADAw.mp3",
    "Prison Earth-mt-K2tJdKPU.mp3",
    "Quantum Computers-4Kr1oR8h3PA.mp3",
    "Red Dwarfs-6l-ar3vI128.mp3",
    "Refugees-KYgS93qiOhA.mp3",
    "Robot Rights-tVb6qaYxIiM.mp3",
    "Simulation-kwMTojA3sCM.mp3",
    "Size-64aj4l9aSnI.mp3",
    "Space Elevator-b8x9rtyFA1M.mp3",
    "String Theory – Soundtrack (2018)-mCdoJNnMDlM.mp3",
    "Sun on Earth-szTlTzwS5J4.mp3",
    "Surveillance-RUD9934wLVE.mp3",
    "The Fermi Paradox I-F9j-s9T3WHA.mp3",
    "The Fermi Paradox II-RqeUNbMjnbc.mp3",
    "The Immune System-dprXzLBxEyg.mp3",
    "The War on Drugs-ty9-d5xVnkY.mp3",
    "Three Ways to Destroy the Universe-YlLdSc7WbxQ.mp3",
    "Time Remastered – Soundtrack (2018)-PgAxibDmN_E.mp3",
    "Time-VmDf83vAWkA.mp3",
    "UBI-Fsk3ZWyiKPw.mp3",
    "Vacuum Decay-c2aeUWZ2zpk.mp3",
    "War-4ZH3hwFS6iw.mp3",
    "What Are You-0zB_7eUKseo.mp3",
    "What Happened Before History-WZDEojKk9rY.mp3",
    "What Is Something-XBxGeZiyR8k.mp3",
    "White Dwarfs-hjyfFDZmj_A.mp3",
    "Who Invented the Internet-VblbDflCJmo.mp3",
    "Why Age-bWOIItEKRvo.mp3",
    "Wormholes – Soundtrack (2018)-UyCgkaBIyAo.mp3",
];
 
 /**
 *  Chaine Youtube de l'artiste : https://www.youtube.com/channel/UCgDfzIiPpEHMmpkvRYs7x9w
 */
 
let selectRandom = function() {
    $("#audio source").attr('src', "assets/musics/" + musics[Math.floor(Math.random() * musics.length)]);
    $("#audio")[0].load()
    $("#audio")[0].volume = 0.2;
    $("#audio")[0].play();
}
 
$("#audio").on("ended", () => {
    selectRandom();
})
 
$("#music").on("click", () => {

    if ($("#audio source").attr("src") == "" )
    {
        selectRandom();
    }
    else{
        if ($("#audio")[0].paused)
	    {
            $("#audio")[0].play();
        }
        else {
            $("#audio")[0].pause();
        }
    }
    
})

$("#next").on("click", () => {

        selectRandom();
        $("#audio")[0].play();
})