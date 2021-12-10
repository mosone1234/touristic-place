class Country < ApplicationRecord
    include Featurable

    featurable :geom, [:name]
end
