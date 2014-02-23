(ns game-react.core
  (:use ring.util.response)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes]]
            [ring.middleware.json :as middleware]))

;; https://github.com/ztellman/aleph
;; https://github.com/ptaoussanis/carmine
(def board (atom (vec (take 3 (repeat (vec (take 3 (repeat :empty))))))))

(defn play [user x y]
  (letfn [
     (unpars [data] (partition 3 data))
     (pars [data] (vec (flatten data)))
     (update [data user x y] (letfn [(pos [x y] (+ (* x 3)y))] (assoc data (pos x y) user)))
     (move [user x y data] vec (unpars (update (pars data) user x y)))]
     (swap! board (partial move user x y))))

(defroutes app-routes
  (GET  "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/:player/:x/:y" [player x y] (response (play player (Integer. x) (Integer. y))))
  (GET  "/board" [] (response (deref board)))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app
  (-> (handler/api app-routes)
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)))
